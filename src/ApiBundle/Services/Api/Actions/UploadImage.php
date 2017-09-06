<?php

namespace ApiBundle\Services\Api\Actions;
use ApiBundle\ApiBundle;
use ApiBundle\Entity\Category;
use ApiBundle\Entity\Image;
use ApiBundle\Entity\Product;

/**
 * Created by PhpStorm.
 * User: admin
 * Date: 14.08.2017
 * Time: 22:25
 */
class UploadImage extends ActionAbstract
{
    /**
     * Override
     * @return array
     */
    protected function process()
    {
        $data  = $this->getData();
        $image = $data['image'];

        $imgData = str_replace(' ','+',$image['data_uri']);
        $imgData = substr($imgData,strpos($imgData,",")+1);
        $imgData = base64_decode($imgData);
        $uploadPath = dirname(dirname(dirname(dirname(dirname(__DIR__))))) .
            DIRECTORY_SEPARATOR . 'admin' . DIRECTORY_SEPARATOR . 'img' . DIRECTORY_SEPARATOR . 'upload' . DIRECTORY_SEPARATOR . md5('Y-m-d');

        if (!is_dir($uploadPath)) {
            mkdir($uploadPath);
        }

        $parts = explode('.', $image['filename']);
        $ext = array_pop($parts);
        $filename = md5(time()) . '.' . $ext;
        file_put_contents($uploadPath . DIRECTORY_SEPARATOR . $filename, $imgData);

        $product = $this->getQueryBuilder()
            ->getRepository($this->getEntityName())
            ->find($data['entity']['id']);

        $imageEntity = new Image();
        $imageEntity->setName(md5('Y-m-d') . DIRECTORY_SEPARATOR . $filename);
        $imageEntity->setType($data['image']['filetype']);
        $imageEntity->setProduct($product);

        $this->getQueryBuilder()->persist($imageEntity);
        $this->getQueryBuilder()->flush();

        sleep(2);

        $product = $this->getQueryBuilder()
            ->getRepository($this->getEntityName())
            ->find($data['entity']['id']);

        //$serializer =

        return [$product];
    }

    protected function createSerializer() {
        return new \ApiBundle\Services\Api\Serializer();
    }

}