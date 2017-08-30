<?php
/**
 * Created by PhpStorm.
 * User: Dmytro_Denysov
 * Date: 8/15/2017
 * Time: 3:15 PM
 */

namespace ApiBundle\Services\Api;
use ApiBundle\Entity\Product;
use Symfony\Component\Serializer\Serializer as SymfonySerializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;


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

    public function deserialize($data, $mapping, $entity)
    {
        $encoders = array(new XmlEncoder(), new JsonEncoder());
        $normalizers = array(new ObjectNormalizer());

        $serializer = new SymfonySerializer($normalizers, $encoders);
        return $serializer->deserialize(json_encode($data), $mapping, 'json', ['object_to_populate' => $entity, 'enable_max_depth' => true]);
    }
}