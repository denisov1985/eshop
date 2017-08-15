<?php
/**
 * Created by PhpStorm.
 * User: Dmytro_Denysov
 * Date: 8/15/2017
 * Time: 2:32 PM
 */

namespace ApiBundle\Services\Api;

use Symfony\Component\BrowserKit\Request;

class Params
{
    protected $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }
}