import { Component, OnInit } from '@angular/core';
import { Origin, Reference } from '../models/origin'
import { EntryService } from './entry.service';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  constructor(private es: EntryService, private formBuilder: FormBuilder) { }
  origins: Origin[]
  isHadeeth: boolean = false
  initReferences: Reference[]
  selectedOrigin: string
  isInputDisabled = true
  entryForm = new FormGroup({
    arabic: new FormControl('', Validators.required),
    translation: new FormControl('', Validators.required),
    origin: new FormControl('', Validators.required),
    references: this.formBuilder.array([])
  })

  get references() {
    return this.entryForm.get('references') as FormArray
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
  }


  onSubmit(entryForm) {
    console.log(entryForm.value)
  }

  onOriginSelect() {
    const hadeethFlag = this.selectedOrigin === "Hadeeth";
    if (hadeethFlag) {
      this.es.getReferences().subscribe(
        refs => {
          this.initReferences = refs   
          this.isHadeeth = hadeethFlag
          this.addReference()
        },
        err => alert(err)
      )
    }
  }

}
