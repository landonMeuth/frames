#!/bin/bash
sudo echo "interface wlan0" >> /etc/dhcpcd.conf
sudo echo "static ip_address=" >> /etc/dhcpcd.conf #set address to something
sudo echo "static routers=" >> /etc/dhcpcd.conf #set routers to address
sudo echo "static domain_name_servers=10.10.10.10" >> /etc/dhcpcd.conf
sudo reboot