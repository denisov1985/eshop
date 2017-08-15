<?php

namespace AdminBundle\Controller;

use AdminBundle\Webpack;
use ApiBundle\Services\Api\ActionResolver;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;


class ProductController extends DefaultController
{
    protected function getEntityName()
    {
        return 'product';
    }
}
