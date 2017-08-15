<?php

namespace AdminBundle\Controller;

use AdminBundle\Webpack;
use ApiBundle\Services\Api\ActionResolver;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;


class DefaultController extends Controller
{
    public function indexAction(Request $request)
    {
        $actionResolver = new ActionResolver('product/collect', $request, $this->getDoctrine());
        $product = $actionResolver->resolve();

        $serializer = \JMS\Serializer\SerializerBuilder::create()->build();
        $product    = $serializer->serialize($product, 'json', \JMS\Serializer\SerializationContext::create()->setSerializeNull(true));

        return $this->render('AdminBundle:Default:index.html.twig', [
            'data' => [
                'product' => json_decode($product, true)
            ]
        ]);
    }
}
