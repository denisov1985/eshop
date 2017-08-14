<?php

namespace ApiBundle\Controller;

use ApiBundle\Services\Api\ActionResolver;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    public function indexAction($path = '', Request $request)
    {
        $actionResolver = new ActionResolver($path, $request, $this->getDoctrine());
        echo $actionResolver->resolve();
        die();

        return $this->render('ApiBundle:Default:index.html.twig');
    }
}
