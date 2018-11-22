import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { getNonHydratedSegmentIfLinkAndUrlMatch } from 'ionic-angular/umd/navigation/url-serializer';
import { SigninPage } from '../signin/signin';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';
import { Camera, CameraOptions } from '@ionic-native/camera';
// import {Md5} from 'ts-md5/dist/md5';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {

  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  savamAppURL = "http://savamapp.com/API/";
  public result: any;
  images: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public imagePicker: ImagePicker, public base64: Base64, private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  getRegisterData() {
    if (typeof this.username !== 'undefined') {
      var usernameAPIUrl = this.savamAppURL + "SearchUser/" + this.username;
      return new Promise(resolve => {
        this.http.get(usernameAPIUrl).subscribe(isUsernameAlreadyExits => {

          if (isUsernameAlreadyExits == 0) {
            //TODO
            alert("Username is already exits");
          } else {
            if (typeof this.email !== 'undefined') {
              var emailAPIUrl = this.savamAppURL + "CheckEmail/" + this.email;

              if (this.validateEmail(this.email)) {
                this.http.get(emailAPIUrl).subscribe(isEmailAlreadyExits => {
                  if (isEmailAlreadyExits == 0) {
                    //TODO
                    alert("Email is already exits");
                  } else {
                    if ((typeof this.password !== 'undefined') && (typeof this.confirmPassword !== 'undefined')) {
                      if (this.password == this.confirmPassword) {
                        var addUserAPIUrl = this.savamAppURL + "AddUser/" + this.username + "/" + this.password + "/null/" + this.email + "/null/2000-01-01";
                        this.http.get(addUserAPIUrl).subscribe(isInsertUserSuccess => {
                          if (isInsertUserSuccess == 1) {
                            //TODO
                            alert("Register Success");
                            this.navCtrl.push(SigninPage);
                          } else {
                            alert("Register isn't Success");
                          }
                        }, err => {
                          console.log(err);
                        });
                      } else {
                        //TODO
                        alert("Password not equal");
                      }
                    }
                  }
                }, err => {
                  console.log(err);
                });
              } else {
                alert("Email isn't valid");
              }
            }
          }
        }, err => {
          console.log(err);
        });
      });
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  getPictures() {
    // this.imagePicker.getPictures({
    // }).then( results =>{

    //   this.base64.encodeFile(results[0]).then((base64File: string) => {
    //     console.log("base64: " + base64File);
    //     var myElement = document.getElementById("userImageProfile");
    //     var str = "data:image/jpeg;base64,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"+
    //         "TOZv4RrQpXJIrjp8slcYt/keeasHZpNMyBmcMNFti6Mv5iVKtoB5bneq/UkuBvIVNssTlV5TMCM2WADAlvvF0E+tWGrPY6hKUem6ske1dxHhwULbHJaazHtVidT5RtUz6ObFopecoty8olEY6H1tyQQNgJOgnzqqY3CXjkZy7s4JiHZhBKnNI3lG/hrjYO/acZA4aAQUmdcunhOmrAddRprTQTjzuZp4ozw9pSosfpJsWVuWzbVEZkBdFKkKTM+rpy/rzpDg2JVLYzWUfnLMqyGtBIMj21C8R4dfFw5luOT+YgsToTrBOsA8+Roi2L4CeE+M5UBUS0RtI1Gopm97oiOFdmMOqyX7RYkun4dpFA1yEEljck7aAco8vZUngDh8is6W48JAbIQuazbBIDtsGFwwd83UCqabjscmmpiIVefM+2nKm/aGUqYLFQCJ8QiQPiPjUKQS03wKKY740qqqxkmfyNIiNPlA91FwHanGWfw8Q8dGOcfBpApliLN93IZHLgSVyGQvXLGg2pLD4R3nIuaImInUwNN9yPjSvm0aYwh2+mdMueC9KmJT8W1buDylD8dR8qnMJ6WsOfxbN1D+zlcfUH5VmY4ddP5fzZdxuBJ58hqTy502vWMpKssEGCDuCOVOsk0ZJ+m6bJ8q/Q2mx254VcbMbihzEl7bA6bSSsczzqUwnGeHMoVL2GI/Tnt9Mu09NK8+Nh1PKk2wKnrTLM/Jkn6Kv6WemLa2H1UW221GU6DalFwtsGQigwRoANDEj3wPgK8vHhq/qPyp3YVk2uP8AxEU3e+hT/Bp38x6XbDWzoUQjX8o/N63x50TE4O06G26IyHUqQIJmZI6zrWAKuIhSt1mlQ3rsN2yx4okzG3UUnde/zLkdQxZdp3BIOmtQ830Gh6Pv+Ir+3+zcH7N4Ab2LI9qrTO9gOFJ6y4ZfaUH9axY4e4RmymImf+4r8ZBEVxcNcJgK0jlEHeNvbS9z/qaF6a/OZ/v8zWMTjOCJuLJ/dtl/5QaY2+3HDsOScNhzJ3KoqT5EzPyrNMRhXVspB3gEagnoCN9xRruAuKcuUk6ba6kbGOeh08qjrfhFy9Pw18U2/uy8Y/0p32/CsonmxLn5RVZ4l2sxl7177x0XwD2eGJ99Rd3COpgqdyNNRI3AI0MULWEdtl958IGsak6DXSocpM049Lpse8YoRJoUGEGKFIa0DKakrfGboULpAiDBBAHd6Agg690nnpy1oUKlCSjGXKDjj17onOPBtLOTA2/Ow160Y8fva6Lrp6p9WEGXfY92vn51yhU2xOxj9gWuP31jLlEQB4Z0FsWwuvKB8daRfi1wsjELKMGGh1KqqgnXoq/ChQotkrDBcIbfaWmY0zZ8usT8Z+dObvFrjENC5hc70NBnNpvJ19Vfh7aFCgl44vlBrXGLqkFQqkZQIXkrKyrqdgV+tI2McyBgEXxFSdGB8JkAEHaRMdQOgoUKLZHah7Do9oL8EaEHcEEggqEK6nmFGu++upqNxN1nZnbdjJ0ge6u0KHuTHHGPCEspoZTQoVFD2DKaGU0KFFBZIWOK3FCqACqkEAgkEgqQSJ19UfE9a5/alyS2VczKFLQZIC5dpjlO2/woUKm2V9qHsHHGLg2VRryDfqzRqdRm11oo4q/6E0GUaNooEBd+W87yN6FCi2HZh7BbnE7jEEgSGzzB1OZmE67As3x9ldXibxGRCIiCCfDlVcu/7KnrI3oUKLYdqHsKW+Lt4iUBJBA3EE95r5wLjD4UU8WfTwJAnww0eI5j+afWE70KFFsjsw9hg5JJMbmfjQoUKii0/9k=";

    //     myElement.style.backgroundImage = "url('"+str+"')";

    //   }, (err) => {
    //     console.log(err);
    //   });

    // }, (err) => { 

    // });   

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log("base64Image: " + base64Image);
      var myElement = document.getElementById("userImageProfile");
      myElement.style.backgroundImage = "url('"+base64Image+"')";
     }, (err) => {
      // Handle error
     });    


  }
}
