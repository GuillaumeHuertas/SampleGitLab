
import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { book } from '../../models/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {

  bookNewForm = this.formBuilder.group({

titre : ['', Validators.required],
isbn : ['', Validators.required],
auteur : ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder,
    private service: BookService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSavebook() {
const titre = this.bookNewForm.get('titre').value;
const isbn = this.bookNewForm.get('isbn').value;
const auteur = this.bookNewForm.get('auteur').value;

    const newbook = new book();
newbook.titre = titre;
newbook.isbn = isbn;
newbook.auteur = auteur;
this.service.createNewbook(newbook).subscribe(data => { this.router.navigate(['/book']); });

  }

  onAnnuler() {
    this.router.navigate(['/book']);
  }

}
