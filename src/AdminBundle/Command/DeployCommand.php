<?php

namespace AdminBundle\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class DeployCommand extends Command
{
    protected function configure()
    {
        $this
            // the name of the command (the part after "bin/console")
            ->setName('app:watch')

            // the short description shown while running "php bin/console list"
            ->setDescription('Watch build')

            // the full command description shown when running the command with
            // the "--help" option
            ->setHelp('This command watch webpack build and deploy on server...')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $credentials = file_get_contents('d:\\credentials.txt');
        $credentials = json_decode($credentials, true);

        $output->writeln([
            'Start watching files',
            'Check connection',
        ]);

        $sftp = new \phpseclib\Net\SFTP($credentials['host']);
        if (!$sftp->login($credentials['user'], $credentials['password'])) {
            exit('Login Failed');
        }
        $output->writeln([
            'Connection OK',
        ]);

        $path = dirname(dirname(dirname(__DIR__)));
        $clientBundle = $path . '/app/Resources/webpack/admin.server-bundle.js';
        $serverBundle = $path . '/admin/build/bundle.js';

        $seconds = 0;
        $clientHash = null;
        while (true) {

            if (md5_file($clientBundle) !== $clientHash) {
                $clientHash = md5_file($clientBundle);
                $output->writeln([
                    date('H:i:s') . ': File changed',
                    'Uploading to remote host...'
                ]);
                $sftp->put('/var/www/eshop/app/Resources/webpack/admin.server-bundle.js', $clientBundle, 1);
                $sftp->put('/var/www/eshop/admin/build/bundle.js', $serverBundle, 1);
                $output->writeln([
                    date('H:i:s') . ': Done'
                ]);
            }

            sleep(1);
        }
    }
}