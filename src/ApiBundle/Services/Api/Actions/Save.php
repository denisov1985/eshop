<?php

namespace ApiBundle\Services\Api\Actions;

/**
 * Created by PhpStorm.
 * User: admin
 * Date: 14.08.2017
 * Time: 22:25
 */
class Save extends ActionAbstract
{
    /**
     * Override
     * @return array
     */
    protected function process()
    {
        $data = $this->getData();
        print_r($data); die();
        return [$this->getQueryBuilder()
            ->getRepository($this->getEntityName())
            ->find($this->getActionParams()[0])];
    }
}