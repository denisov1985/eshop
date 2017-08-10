<?php

namespace ShopBundle\DependencyInjection;
// src/Acme/HelloBundle/DependencyInjection/AcmeHelloExtension.php

use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\DependencyInjection\Extension\PrependExtensionInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\Yaml\Yaml;

class ShopExtension extends Extension implements PrependExtensionInterface
{
    // ...

    public function prepend(ContainerBuilder $container)
    {
        $config = Yaml::parse(file_get_contents(__DIR__.'/../Resources/config/config.yml'));

        foreach ($config as $key => $configuration) {
            $container->prependExtensionConfig($key, $configuration);
        }

    }

    public function load(array $configs, ContainerBuilder $container)
    {
        // TODO: Implement load() method.
    }
}