<?php
/**
 * Created by PhpStorm.
 * User: Dmytro_Denysov
 * Date: 8/15/2017
 * Time: 3:15 PM
 */

namespace ApiBundle\Services\Api;


class Serializer
{
    protected $serializer;

    public function __construct()
    {
        $this->serializer = \JMS\Serializer\SerializerBuilder::create()->build();
    }

    public function serialize($data)
    {
        return $this->serializer->serialize($data, 'json', \JMS\Serializer\SerializationContext::create()->setSerializeNull(true));
    }
}