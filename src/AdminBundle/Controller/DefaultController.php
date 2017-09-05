<?php

namespace AdminBundle\Controller;

use AdminBundle\Webpack;
use ApiBundle\Services\Api\ActionResolver;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


class DefaultController extends Controller
{
    const ACTION_DETAILS        = 'get';
    const ACTION_COLLECTION     = 'collect';
    const ACTION_COLLECTION_ALL = 'collect_all';

    protected function getEntityName() {
        return '';
    }

    public function mapActionToProp($action)
    {
        $map = [
            self::ACTION_DETAILS => 'details',
            self::ACTION_COLLECTION => 'dataset',
            self::ACTION_COLLECTION_ALL => 'dataset',
        ];

        return $map[$action];
    }

    protected function resolveData($action, $request, $entity) {
        $actionResolver = new ActionResolver(
            $entity . $action,
            $request,
            $this->getDoctrine()
        );
        $data       = $actionResolver->resolve();
        $serializer = $this->get('api.serializer');
        return $serializer->serialize($data);
    }

    /**
     * Index action returns generic collection
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function indexAction(Request $request)
    {
        try {
            $response = $this->getResponse([
                'product'  => $this->getCollectionParams(),
                'category' => $this->getCollectionAllParams()
            ], $request);
        } catch (\Exception $e) {
            $response = new Response($e->getMessage() . '<br>' . '<br>' . '<br>' . $e->getTraceAsString());
        }
        return $response;
    }

    public function getCollectionParams()
    {
        return [
            self::ACTION_COLLECTION => []
        ];
    }

    public function getCollectionAllParams()
    {
        return [
            self::ACTION_COLLECTION_ALL => []
        ];
    }

    public function getAllParams($id)
    {
        return [
            self::ACTION_DETAILS    => [$id],
            self::ACTION_COLLECTION => [],
        ];
    }

    /**
     * Get action, returns item details
     * @param $id
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function getAction($id, Request $request)
    {
        return $this->getResponse([
            'product'  => $this->getAllParams($id),
            'category' => $this->getCollectionAllParams()
        ], $request);


        die('');

        $details    = $this->resolveData("/get/$id", $request, $this->getEntityName());
        $collection = $this->resolveData("/collect", $request, $this->getEntityName());

        return $this->render('AdminBundle:Default:index.html.twig', [
            'data' => [
                $this->getEntityName() => [
                    'details'    => [
                        json_decode($details, true)
                    ],
                    'dataset'     => json_decode($collection, true),
                ]
            ]
        ]);
    }

    public function getResponse($params, $request)
    {
        $context = [];
        foreach ($params as $name => $param) {
            foreach ($param as $type => $p) {
                $context[$name][$this->mapActionToProp($type)] = json_decode(
                    $this->resolveData("/" . $type . "/" . array_pop($p), $request, $name), true
                );
            }
        }

        /*echo "<pre>";
        print_r(['data' => $context]);
        die();*/

        return $this->render('AdminBundle:Default:index.html.twig', [
            'data' => $context
        ]);
    }

    /**
     * Render empty response
     * @return \Symfony\Component\HttpFoundation\Response
     */
    protected function getEmptyResponse() {
        return $this->render('AdminBundle:Default:index.html.twig', [
            'data' => []
        ]);
    }
}
