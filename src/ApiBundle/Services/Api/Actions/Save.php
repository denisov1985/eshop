<?php

namespace ApiBundle\Services\Api\Actions;
use ApiBundle\ApiBundle;
use ApiBundle\Entity\Category;
use ApiBundle\Entity\Product;

/**
 * Created by PhpStorm.
 * User: admin
 * Date: 14.08.2017
 * Time: 22:25
 */
class Save extends ActionAbstract
{
    /**
     * Override
     * @return array
     */
    protected function process()
    {
        $data = $this->getData();

        $entity = $this->mapDataToEntity($data);
        return [$entity];
    }

    protected function mapDataToEntity($data) {
        $entityName = $this->getQueryBuilder()->getEntityName($this->getEntityName());
        $entity = new $entityName;

        if ($data['id']) {
            $entity = $this->getQueryBuilder()
                ->getRepository($this->getEntityName())
                ->find($data['id']);
        }

        $subSet = [];



        foreach ($data as $key => $value) {
            if (is_array($value)) {
                $subSet[$key] = $value;
                unset($data[$key]);
            }
        }



        $serializer   = $this->createSerializer();
        $deserialized = $serializer->deserialize($data, $entityName, $entity);

        foreach($subSet as $method => $val) {

            $methodNameRemove = $this->mapMethodName($method, 'remove', true);
            $methodNameGet = $this->mapMethodName($method, 'get');
            foreach ($deserialized->$methodNameGet() as $itemToRemove) {
                $deserialized->$methodNameRemove($itemToRemove);
            }

            foreach ($val as $subEntityNamePlural => $subEntityArray) {

                $subEntityName = $this->getQueryBuilder()->getEntityName($this->removePlural($method));
                if ($subEntityArray['id']) {
                    $subE = $this->getQueryBuilder()
                        ->getRepository($this->removePlural($method))
                        ->find($subEntityArray['id']);
                    $methodName = $this->mapMethodName($method, 'add', true);
                    $deserialized->$methodName($subE);
                }
            }
        }

        $this->getQueryBuilder()->persist($deserialized);
        $this->getQueryBuilder()->flush();
        //print_r($subSet);
        return $deserialized;
    }

    protected function removePlural($key) {
        $key = str_ireplace('ies', 'y', $key);
        $key = rtrim($key, 's');
        return $key;
    }

    protected function mapMethodName($key, $type, $removePlural = false) {
        // remove plural
        if ($removePlural) {
            $key = $this->removePlural($key);
        }
        return $type . str_replace(' ', '', ucwords(str_replace('_', ' ', $key)));
    }

    protected function mapSetMethodName($key) {
        return "set" . str_replace(' ', '', ucwords(str_replace('_', ' ', $key)));
    }

    protected function filterValue($value) {
        return $value === '' ? null : $value;
    }

    protected function createSerializer() {
        return new \ApiBundle\Services\Api\Serializer();
    }


}