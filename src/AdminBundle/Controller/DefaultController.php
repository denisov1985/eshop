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
                $this->getEntityName() => json_decode($data, true)
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
