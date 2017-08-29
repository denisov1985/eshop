<?php

namespace ApiBundle\Services\Api\Actions;

/**
 * Created by PhpStorm.
 * User: admin
 * Date: 14.08.2017
 * Time: 22:25
 */
class CollectAll extends ActionAbstract
{
    /**
     * Override
     * @return array
     */
    protected function process()
    {
        return $this->getQueryBuilder()
            ->collectAll(
                $this->getEntityName()
            );
    }
}