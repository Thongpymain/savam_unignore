/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package io.ionic.starter;

import android.os.AsyncTask;
import android.os.Bundle;
import android.util.Log;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.google.firebase.iid.FirebaseInstanceId;
import com.google.firebase.messaging.FirebaseMessaging;

import org.apache.cordova.*;


import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;

import javax.net.ssl.HttpsURLConnection;

import io.ionic.starter.fcm.MyFirebaseInstanceIDService;

public class MainActivity extends CordovaActivity
{
    @Override
    public void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);

      // enable Cordova apps to be started in the background
      Bundle extras = getIntent().getExtras();
      if (extras != null && extras.getBoolean("cdvStartInBackground", false)) {
        moveTaskToBack(true);
      }

      // Set by <content src="index.html" /> in config.xml
      loadUrl(launchUrl);

      String refreshedToken = FirebaseInstanceId.getInstance().getToken();
      Log.i("Response","refreshedToken : " + refreshedToken);
      sendRegistrationToServer(refreshedToken);
    }
  public void sendRegistrationToServer(String token) {
    RequestQueue ExampleRequestQueue = Volley.newRequestQueue(this);
    String url = "http://savamapp.com/API/GetToken/" + token;
    StringRequest ExampleStringRequest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
      @Override
      public void onResponse(String response) {
      }
    }, new Response.ErrorListener() { //Create an error listener to handle errors appropriately.
      @Override
      public void onErrorResponse(VolleyError error) {
        LOG.d("Error Response", error.getMessage());
      }
    });

    ExampleRequestQueue.add(ExampleStringRequest);
  }
}
