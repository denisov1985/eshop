<?php

namespace ApiBundle\Services\Api\Actions;
use ApiBundle\ApiBundle;
use ApiBundle\Entity\Category;
use ApiBundle\Entity\Product;

/**
 * Created by PhpStorm.
 * User: admin
 * Date: 14.08.2017
 * Time: 22:25
 */
class UploadImage extends ActionAbstract
{
    /**
     * Override
     * @return array
     */
    protected function process()
    {
        $data = $this->getData();

        sleep(2);
        return [$data];
    }


}