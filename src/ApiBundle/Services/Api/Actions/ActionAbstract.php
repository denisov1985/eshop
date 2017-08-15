<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 14.08.2017
 * Time: 22:47
 */

namespace ApiBundle\Services\Api\Actions;


use ApiBundle\Services\Api\ActionResolver;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\Persistence\ObjectRepository;
use Doctrine\ORM\EntityRepository;

class ActionAbstract
{
    protected $resolver;

    public function __construct(ActionResolver $resolver)
    {
        $this->resolver = $resolver;
    }

    /**
     * Process request
     * @return array
     */
    protected function process() : array {}

    /**
     * Handle api action request
     * @return array
     */
    public function handle() : array
    {
        return $this->process();
    }

    /**
     * Get entity manager
     * @return mixed
     */
    protected function getEntityManager() : ObjectManager {
        return $this->resolver->getDoctrine()->getManager();
    }

    /**
     * Get repository
     * @param null $entity
     * @return ObjectRepository
     */
    protected function getRepository($entity = null) : ObjectRepository {
        if (is_null($entity)) {
            $entity = $this->resolver->getEntityName();
        }
        $entity = ucfirst($entity);
        return $this->resolver->getDoctrine()->getRepository('ApiBundle\Entity\\' . $entity);
    }

}