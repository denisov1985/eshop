<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 14.08.2017
 * Time: 22:47
 */

namespace ApiBundle\Services\Api\Actions;


use ApiBundle\Services\Api\ActionResolver;
use ApiBundle\Services\Api\QueryBuilder;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\Persistence\ObjectRepository;
use Doctrine\ORM\EntityRepository;

class ActionAbstract
{
    protected $resolver;
    protected $queryBuilder;

    public function __construct(ActionResolver $resolver)
    {
        $this->resolver     = $resolver;
        $this->queryBuilder = new QueryBuilder($this->resolver->getDoctrine());
    }

    /**
     * Process request
     * @return array
     */
    protected function process() {}

    /**
     * Handle api action request
     * @return array
     */
    public function handle()
    {
        return $this->process();
    }

    /**
     * @return QueryBuilder
     */
    public function getQueryBuilder(): QueryBuilder
    {
        return $this->queryBuilder;
    }

    /**
     * Get entity name
     * @return mixed
     */
    protected function getEntityName() {
        return $this->resolver->getEntityName();
    }

    /**
     * Get action params
     * @return array
     */
    protected function getActionParams() {
        return $this->resolver->getActionParams();
    }
}