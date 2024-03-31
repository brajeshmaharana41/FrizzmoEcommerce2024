import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reward-class',
  templateUrl: './reward-class.component.html',
  styleUrls: ['./reward-class.component.scss']
})
export class RewardClassComponent implements OnInit {
  rewardform : any
  constructor() { }

  ngOnInit(): void {
    this.rewardform = new FormGroup({
      rewards : new FormControl('', [Validators.required]),
    })
  }
  onClickSubmit(Updata: any){
    console.log('Reward', Updata)
  }
}
