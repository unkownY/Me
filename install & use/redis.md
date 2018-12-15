# Redis 

## install 

### centos :
  * sudo yum install epel-release
  * sudo yum update
  * sudo yum -y install redis
  * sudo systemctl start redis
  * vi /etc/redis.conf
      * #bind 127.0.0.1
      * #requirepass foobared
  * sudo systemctl restart redis   
  * auth password
