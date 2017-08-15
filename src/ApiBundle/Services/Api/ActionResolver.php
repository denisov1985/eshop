<?php

namespace ApiBundle\Services\Api;
use \Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Created by PhpStorm.
 * User: admin
 * Date: 14.08.2017
 * Time: 22:25
 */
class ActionResolver
{
    protected $path;
    protected $request;
    protected $doctrine;

    protected $entityName;
    protected $actionName;

    /**
     * ActionResolver constructor.
     * @param $path
     * @param $request
     * @param $doctrine
     */
    public function __construct($path, $request, $doctrine)
    {
        $this->path      = $path;
        $this->request   = $request;
        $this->doctrine = $doctrine;

        $parts = explode('/', $path);
        $this->entityName = $parts[0];
        $this->actionName = $parts[1];
    }

    /**
     * @return mixed
     */
    public function getDoctrine()
    {
        return $this->doctrine;
    }



    /**
     * Resolve action
     */
    public function resolve()
    {
        $className = 'ApiBundle\Services\Api\Actions\\' . ucfirst($this->actionName);
        $action    = new $className($this);
        return $action->handle();
    }

    /**
     * @return mixed
     */
    public function getPath()
    {
        return $this->path;
    }

    /**
     * @return mixed
     */
    public function getRequest()
    {
        return $this->request;
    }

    /**
     * @return mixed
     */
    public function getEntityName()
    {
        return $this->entityName;
    }

    /**
     * @return mixed
     */
    public function getActionName()
    {
        return $this->actionName;
    }


}