import { Component, OnInit } from '@angular/core';
import { Origin, Reference } from '../models/origin'
import { EntryService } from './entry.service';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { DashboardService } from '../dashboard/dashboard.service';
import { Emotion } from '../models/emotion'

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  constructor(
    private es: EntryService,
    private formBuilder: FormBuilder,
    private ds: DashboardService
  ) { }
  origins: Origin[]
  isHadeeth: boolean = false
  initEmotions: Emotion[]
  initReferences: Reference[]
  selectedOrigin: string
  isInputDisabled = true

  emotionFormGroup = () => new FormControl('', Validators.required)


  entryForm = new FormGroup({
    arabic: new FormControl('', Validators.required),
    translation: new FormControl('', Validators.required),
    origin: new FormControl('', Validators.required),
    references: this.formBuilder.array([]),
    emotions: new FormControl()
  })

  isOriginHadeeth = (originType) => originType === "Hadeeth"

  get references() {
    return this.entryForm.get('references') as FormArray
  }
  get emotions() {
    return this.entryForm.get('emotions') as FormArray
  }

  addEmotion() {
    this.emotions.push(this.emotionFormGroup())
  }
  removeEmotion(i: number) {
    this.emotions.removeAt(i)
  }

  addReference() {
    this.references.push(new FormGroup({
      name: new FormControl('', Validators.required),
      refNumber: new FormControl('')
    }))
  }
  removeReference(index: number) {
    this.references.removeAt(index)
  }

  ngOnInit() {
    this.es.getOrigins().subscribe(
      origins => this.origins = origins,
      err => alert(err)
    )

    this.es.getReferences().subscribe(
      refs => {
        this.initReferences = refs
      },
      err => alert(err)
    )

    this.ds.GetEmotions().subscribe(
      emos => this.initEmotions = emos,
      err => alert(err)
    )
  }


  onSubmit(entryForm) {
    console.log(entryForm.value)
  }

  onOriginSelect() {
    if (!this.isOriginHadeeth(this.selectedOrigin)) {
      this.isHadeeth = false
      return
    }
    this.es.getReferences().subscribe(
      refs => {
        this.initReferences = refs
        this.isHadeeth = true
        if (this.references.length <= 0)  {
          this.addReference()
        }
      },
      err => alert(err)
    )

  }

}
