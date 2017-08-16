<?php

namespace AdminBundle\Controller;

use AdminBundle\Webpack;
use ApiBundle\Services\Api\ActionResolver;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;


class DefaultController extends Controller
{
    protected function getEntityName() {
        return '';
    }

    protected function resolveData($action, $request) {
        $actionResolver = new ActionResolver(
            $this->getEntityName() . $action,
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
        if ('' === $this->getEntityName()) {
            return $this->getEmptyResponse();
        }
        $actionResolver = new ActionResolver(
            $this->getEntityName() . '/collect',
            $request,
            $this->getDoctrine()
        );
        $data       = $actionResolver->resolve();
        $serializer = $this->get('api.serializer');
        $data       = $serializer->serialize($data);

        return $this->render('AdminBundle:Default:index.html.twig', [
            'data' => [
                $this->getEntityName() => [
                    'dataset' => json_decode($data, true),
                    'status'  => 2
                ]
            ]
        ]);
    }

    /**
     * Get action, returns item details
     * @param $id
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function getAction($id, Request $request)
    {
        $details    = $this->resolveData("/get/$id", $request);
        $collection = $this->resolveData("/collect", $request);

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
