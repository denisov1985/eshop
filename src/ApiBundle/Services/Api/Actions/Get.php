<?php

namespace ApiBundle\Services\Api\Actions;

/**
 * Created by PhpStorm.
 * User: admin
 * Date: 14.08.2017
 * Time: 22:25
 */
class Get extends ActionAbstract
{
    /**
     * Override
     * @return array
     */
    protected function process()
    {
        return $this->getQueryBuilder()
            ->getRepository($this->getEntityName())
            ->find($this->getActionParams()[0]);
    }
}