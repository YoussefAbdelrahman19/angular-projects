import { Component, OnInit } from '@angular/core';
import { GetApiPostsService } from 'src/app/Services/get-api-posts.service';
import { StreamService } from 'src/app/Services/stream.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private streamData: StreamService,
    private posts: GetApiPostsService
  ) {}

  ngOnInit(): void {
    console.log(
      this.posts.getAllPost().subscribe((data) => {
        console.log(data);
      })
    );
  }
  loadData() {
    // سبسكريب دي ال بتعمل فيها سبسكريب لنتيجه الاوبسيفربول ولازم تعمل سبسركيب عشان تستقبل الداتا ورا بعض كل م يبعت الاوبسيرفبول
    //سبسكريب فيها تلت حالات انت بتبعت الداتا من هناك بتلت حالات فلازم يكون فيه ايضا تلت حالات عشان يهندلوا الاوبسيفبول
    this.streamData.createStream().subscribe(
      (next) => {
        //نيكست تمثل الداتا ال مبعوته دلوقتي
        console.log(next);
      },
      (err) => {
        //ايرور يمثل الحاله التانيه وهو ان فيه ايرور ف ينفذ ال جوا دي
        console.log(err);
      },
      () => {
        //التالته فانكشن مش ايفنت زيهم ف هنا هطبع انه دان
        console.log('done');
      }
    );
  }
}
