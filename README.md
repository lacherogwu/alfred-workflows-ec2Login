# Setup Instructions
In order to connect to a server you need to add your keys first and then the instances.

To add keys and instances use the 'ec2add' keyword.

Add instance format:
name,username@ip
for e.g. My App,root@1.2.3.4

Add key format:
name,path
for e.g. Master,/Keys/master.pem

## How to use
Once you added your keys and your instances use the 'ec2login' keyword in order to establish an SSH connection with your instance

If you want to remove key or instance use the 'ec2remove' keyword

## Examples
[![image.png](https://i.postimg.cc/P5DTkRXf/image.png)](https://postimg.cc/gxGfV4L1)
[![image.png](https://i.postimg.cc/6qTTVfd7/image.png)](https://postimg.cc/zHZJ8W25)

## Bugs
If you are facing any bug you can use the 'ec2reset' keyword and it will remove your keys and instances and generate new empty files

## GitHub URL
https://github.com/lacherogwu/alfred-workflows-ec2Login