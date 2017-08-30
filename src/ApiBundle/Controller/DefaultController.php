<?php

namespace ApiBundle\Controller;

use ApiBundle\Services\Api\ActionResolver;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    public function indexAction($path = '', Request $request)
    {
        $actionResolver = new ActionResolver($path, $request, $this->getDoctrine());
        $data = $actionResolver->resolve();
        $serializer = \JMS\Serializer\SerializerBuilder::create()->build();
        $content    = $serializer->serialize($data, 'json', \JMS\Serializer\SerializationContext::create()->setSerializeNull(true));
        $response = new JsonResponse([
            'data' => json_decode($content, true),
            'request' => [
                'body' => $actionResolver->getData()
            ]
        ]);
        return $response;
    }
}
