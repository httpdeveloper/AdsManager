# AdsManager
This is the entire source code of Ads Manager App where you can get an idea about its implementation.

![alt text](http://httpdeveloper.pythonanywhere.com/static/images/ad/adsmanager.png)


# Requirements
1. [React Native](http://facebook.github.io/react-native/docs/getting-started.html)
2. [Graphcool](https://www.graph.cool/)

# Setup
### 1. Clone the repo
```
$ git clone https://github.com/httpdeveloper/AdsManager.git
$ cd AdsManager
```
### 2. Install dependencies (npm v3+):
```
$ npm install
```
### 3. Setup Graphcool Schema (https://console.graph.cool/)

```
type Ad implements Node {
  address: String
  createdAt: DateTime!
  description: String!
  id: ID! @isUnique
  image: String
  latitude: Float
  longitude: Float
  title: String!
  updatedAt: DateTime!
  user: User @relation(name: "AdUser")
}

type User implements Node {
  ads: [Ad!]! @relation(name: "UserAds")
  createdAt: DateTime!
  email: String!
  fbuserid: String @isUnique
  id: ID! @isUnique
  image: String!
  name: String!
  updatedAt: DateTime!
}
```

### 4. Update App Setting (AdsManager/js/setting)
```
setting: {
  NETWORK_INTERFACE_URL: 'https://api.graph.cool/simple/v1/API_KEY',
  SUBSCRIPTION_CLIENT_URL: 'wss://subscriptions.graph.cool/v1/API_KEY',
  GOOGLE_MAP_API_KEY: 'API_KEY',
  IMAGE_UPLOAD_API: 'http://your-api-domain.com/IMAGE_UPLOAD_API',
  ...
}

Get API_KEY from https://console.graph.cool ENDPOINTS and https://console.developers.google.com

```

### 5. Setup Image Upload Server (Sample PHP script)
```
<?php

$maxUploadSize = 2;// 2 MB
$status = false;
$msg = '';
$imageUrl = '';
$userId = (isset($_POST['userId']) && !empty($_POST['userId'])) ? $_POST['userId'] : 1;
$rootUrl = 'http://your-api-domain.com';
$rootPath = $_SERVER['DOCUMENT_ROOT'];
$token = 'BEARER_TOKEN';
$imgUploadFolder = 'IMAGE_UPLOAD_FOLDER';

function getBearerToken(){
    $headers = $bearerTokenValue = null;
    if (isset($_SERVER['Authorization'])) {
        $headers = trim($_SERVER["Authorization"]);
    }
    else if (isset($_SERVER['HTTP_AUTHORIZATION'])) { 
        $headers = trim($_SERVER["HTTP_AUTHORIZATION"]);
    } elseif (function_exists('apache_request_headers')) {
        $requestHeaders = apache_request_headers();
        if (isset($requestHeaders['Authorization'])) {
            $headers = trim($requestHeaders['Authorization']);
        }
    }
    
    if($headers) {
    	list($bearerTokenName, $bearerTokenValue) = explode(' ', $headers);
    }

    return $bearerTokenValue;
}

$apiBearerToken = getBearerToken(); //Get bearer token sent by api

if($apiBearerToken === $token) {
  if (isset($_FILES['advertisementPhoto']) && !empty($_FILES['advertisementPhoto'])) {
    $file = $_FILES['advertisementPhoto'];
    if (!$file['error'] && $file['size'] > 0) {
      $size = ($file['size'] / (1024 * 1024)); //size in mb
      if ($size <= $maxUploadSize) {
        list($name, $ext) = explode('.', $file['name']);
        $fileName = $name . '_' . time() . '.' . $ext;
        $uploadPath = $rootPath . '/'. $imgUploadFolder .'/'. $userId . '/' . $fileName;
        $baseDir = dirname($uploadPath);
        if (!file_exists($baseDir)) {
          @mkdir($baseDir, 0755);
        }
        if (is_writable($baseDir) && move_uploaded_file($file['tmp_name'], $uploadPath)) {
          $status = true;
          $msg = 'Image Uploaded Successfully';
          $imageUrl = $rootUrl . '/'. $imgUploadFolder .'/' . $userId . '/' . $fileName;
        } else {
          $msg = 'Sorry, Image could not be uploaded.';
        }
      } else {
        $msg = 'Image size should not be greater than '. $maxUploadSize. 'MB';
      }
    } else {
      $msg = 'Image Error or Invalid Size';
    }
  } else {
    $msg = 'Invalid Image';
  }
} else {
 $msg = 'Invalid Bearer Token';
}

echo json_encode(array('status' => $status, 'msg' => $msg, 'picUrl' => $imageUrl));
```
### 6. Setup Faceook Login SDK (Optional)
Follow following links
```
https://developers.facebook.com/docs/android/getting-started/ (From step 6)
https://developers.facebook.com/docs/ios/getting-started/ (From Step 4)
```
### 7. Running on IOS
```
react-native run-ios
```
### 8. Running on Android
```
react-native run-android
```

# Demo
Here is the [Demo](https://httpdeveloper.pythonanywhere.com/pages/adsmanager) link you can check out.

# Article
[Article](https://medium.com/@httpdeveloper/how-to-integrate-graphql-with-redux-in-react-native-c1912bf33120) about how to integrate GraphQL with Redux in React Native on medium.com


