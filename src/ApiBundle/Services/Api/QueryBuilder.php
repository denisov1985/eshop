<?php
/**
 * Created by PhpStorm.
 * User: Dmytro_Denysov
 * Date: 8/15/2017
 * Time: 2:03 PM
 */

namespace ApiBundle\Services\Api;


use Doctrine\Bundle\DoctrineBundle\Registry;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityRepository;

class QueryBuilder
{
    protected $doctrine;

    /**
     * QueryBuilder constructor.
     * @param Registry $doctrine
     */
    public function __construct(Registry $doctrine)
    {
        $this->doctrine = $doctrine;
    }

    /**
     * @return Registry
     */
    public function getDoctrine(): Registry
    {
        return $this->doctrine;
    }

    /**
     * Get entity manager
     * @return EntityManager
     */
    protected function getEntityManager() {
        return $this->getDoctrine()->getManager();
    }

    /**
     * Get repository
     * @param null $entity
     * @return EntityRepository
     */
    public function getRepository($entity = null) {
        $entity = ucfirst($entity);
        return $this->getDoctrine()->getManager()->getRepository('ApiBundle\Entity\\' . $entity);
    }

    /**
     * Create query builder
     * @param $entity
     * @return \Doctrine\ORM\QueryBuilder
     */
    protected function createBuilder($entity) {
        $builder = $this->getRepository($entity)
            ->createQueryBuilder('p')
            ->setMaxResults(10);
        return $builder;
    }

    /**
     * Collect data
     * @param $entity
     * @return array
     */
    public function collect($entity) {
        $builder = $this->createBuilder($entity)
            ->setFirstResult(1);
        return $builder->getQuery()->getResult();
    }

    /**
     * Count records
     * @param $entity
     * @return mixed
     */
    public function count($entity) {
        return $this->createBuilder($entity)
            ->select('COUNT(p)')
            ->getQuery()
            ->getSingleScalarResult();
    }

}