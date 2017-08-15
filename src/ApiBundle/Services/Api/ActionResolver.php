<?php

namespace ApiBundle\Services\Api;
use ApiBundle\Services\Api\Actions\ActionAbstract;
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
    protected $actionParams;

    /**
     * ActionResolver constructor.
     * @param $path
     * @param $request
     * @param $doctrine
     */
    public function __construct($path, $request, $doctrine)
    {
        $this->path         = strtolower($path);
        $this->request      = $request;
        $this->doctrine     = $doctrine;
        $this->entityName   = $this->resolveEntityName();
        $this->actionName   = $this->resolveActionName();
        $this->actionParams = $this->resolveActionParams();
    }

    protected function resolveActionParams() {
        $parts = explode('/', $this->path);
        if (!isset($parts[2])) {
            return [];
        }

        array_shift($parts);
        array_shift($parts);
        return $parts;
    }

    /**
     * Get entity name
     * @return string
     */
    protected function resolveEntityName() {
        $parts = explode('/', $this->path);
        return $parts[0];
    }

    /**
     * Get action name
     * @return string
     */
    protected function resolveActionName() {
        $parts = explode('/', $this->path);
        return $parts[1];
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
        /** @var ActionAbstract $action */
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

    /**
     * @return array
     */
    public function getActionParams(): array
    {
        return $this->actionParams;
    }


}