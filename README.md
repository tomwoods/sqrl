SQRL
====

SQRL Client for Chrome

The first objective is to create an [SQRL] (https://www.grc.com/sqrl/sqrl.htm) client extension for the Chrome browser.

The extension should have the following functionality:

* Generate a master identity key
* Employ PBKDF and encrypt and store the master identity key localy 
* Detect QR code on a page
* Verify the QR code is on an SSL encrypted page
* Verify that the SQRL url matches the domain the QR code is on
* Sign the SQRL URL
* Automatically or based on a user's action, submit the signed url and public key to the URL
* Refresh? Redirect? the page
* Export encrypted master identity key as a QR code

The extension should have several modes:

* Better than average security: 
  * Stores the master identity key in a way that can be fetched to log into a site with no user interaction 
  * Not to be used to log on to your bank. 
  * Assumes you control who is in front of your computer / browser.
* Good enough security:
  * Lets you print the master identity key with no encryption to be stored in your wallet as a QR code
  * On entering an SQRL login page, you are prompted to scan the QR of the master identity key using the webcam
  * Assumes people have established ways to protect physical objects such as credit cards and cash, and
    that these methods can be used to secure the QR code of the master identity key. 
* Better security:
  * Master identity key is encoded using PBKDF as described by Steve Gibson
  * A master password must be entered in order to log into a website
