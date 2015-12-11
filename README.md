#Hexo AWS S3 Deployer

###Installation
$ npm install git@github.com:otakuyu/hexo-deployer-aws-s3.git --save

###Options

You can configure this plugin in _config.yml.
```yaml
deploy:
  type: s3
  bucket: <S3 bucket>
  aws_key: <AWS id key> // Optional, if the environment variable `AWS_KEY`
  aws_secret: <AWS secret key> // Optional, if the environment variable `AWS_SECRET` is set
  concurrency: <number of connections> // Optional
  region: <region>  // Optional, see https://github.com/LearnBoost/knox#region
```