<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 14.08.2017
 * Time: 22:47
 */

namespace ApiBundle\Services\Api\Actions;


use ApiBundle\Services\Api\ActionResolver;

class ActionAbstract
{
    protected $resolver;

    public function __construct(ActionResolver $resolver)
    {
        $this->resolver = $resolver;
    }

    protected function process() {}

    public function handle()
    {
        $d = $this->getEntityManager();
        var_dump($d);
        die();
        return $this->process();
    }

    protected function getEntityManager() {
        return $this->resolver->getContainer()->getDoctrine()->getManager();
    }

}