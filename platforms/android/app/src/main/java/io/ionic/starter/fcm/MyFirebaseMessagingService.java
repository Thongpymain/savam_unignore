package io.ionic.starter.fcm;

import android.annotation.SuppressLint;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.media.RingtoneManager;
import android.os.Build;
import android.provider.Settings;
import android.support.v4.app.NotificationCompat;
import android.util.Log;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Map;

import io.ionic.starter.MainActivity;
import io.ionic.starter.R;
import io.ionic.starter.fcm.NotificationData;

/**
 * @author ton1n8o - antoniocarlos.dev@gmail.com on 6/13/16.
 */
public class MyFirebaseMessagingService extends FirebaseMessagingService {

  private static final String TAG = "MyGcmListenerService";

  @Override
  public void onMessageReceived(RemoteMessage message) {
    sendNotification(message);
  }

  /**
   * Create and show a simple notification containing the received GCM message.
   */
  private void sendNotification(RemoteMessage message) {
    String title = message.getData().get("title");
    String content = message.getData().get("content");
    String id = message.getData().get("id");

    NotificationManager notificationManager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
    String NOTIFICATION_CHANEL_ID = "EDMTDev";
    Intent resultIntent = new Intent(this, MainActivity.class);
    PendingIntent notifyPendingIntent = PendingIntent.getActivity(
      this, 0, resultIntent, PendingIntent.FLAG_UPDATE_CURRENT
    );

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
      @SuppressLint("WrongConstant")
      NotificationChannel notificationChannel = new NotificationChannel(NOTIFICATION_CHANEL_ID, "EDMT Notification", NotificationManager.IMPORTANCE_MAX);
      notificationChannel.setDescription("EDMT DEV");
      notificationChannel.enableLights(true);
      notificationChannel.setLightColor(Color.RED);
      notificationChannel.setVibrationPattern(new long[]{0, 1000, 500, 1000});
      notificationChannel.enableVibration(true);

      notificationManager.createNotificationChannel(notificationChannel);
    }

    NotificationCompat.Builder notificationBuilder = new NotificationCompat.Builder(this, NOTIFICATION_CHANEL_ID);
    notificationBuilder.setAutoCancel(true)
      .setDefaults(Notification.DEFAULT_ALL)
      .setWhen(System.currentTimeMillis())
      .setSmallIcon(R.mipmap.ic_launcher)
      .setTicker("Hearty365")
      .setContentTitle(title)
      .setContentText(content)
      .setContentInfo("info")
      .setPriority(Notification.PRIORITY_MAX)
    .setContentIntent(notifyPendingIntent);

    notificationManager.notify(Integer.parseInt(id), notificationBuilder.build());
  }
}
