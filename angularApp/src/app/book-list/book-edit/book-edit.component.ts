import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  bookEditForm = this.formBuilder.group({
titre: ['', Validators.required],
isbn: ['', Validators.required],
auteur: ['', Validators.required],
  });
  
  constructor(private formBuilder: FormBuilder,
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute) { }

  id: any;
  book1: book;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.getsinglebook(+this.id).subscribe((value) => {
    this.book1 = value;
    this.initForm();
    });
  }

  initForm() {
    this.bookEditForm.setValue({
titre: this.book1.titre,
isbn: this.book1.isbn,
auteur: this.book1.auteur,
 });
  }

  onSavebook() {
 	const newbook = new book();
	newbook.id=+this.id;

const titre = this.bookEditForm.get('titre').value;
newbook.titre = titre; 
const isbn = this.bookEditForm.get('isbn').value;
newbook.isbn = isbn; 
const auteur = this.bookEditForm.get('auteur').value;
newbook.auteur = auteur; 
   this.service.editOnebook(newbook).subscribe(data =>{this.router.navigate(['/book']);});
  }

  onAnnuler() {
    this.router.navigate(['/book']);
  }

}

