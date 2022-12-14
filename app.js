const display_books=document.querySelector('#book-display');
const display_modal=document.querySelector('#add-button');
const modal=document.querySelector('#modal-background');
const getAuthor=document.querySelector('#author');
const getTitle=document.querySelector('#title');
const getPages=document.querySelector('#pages');
const getStatus=document.querySelector('#status');
const submitModal=document.querySelector('#submit-modal');





//static library for test
let myLibrary=[];
//creator function
function Books(author,title,numberOfPages,read){
    this.author=author,
    this.title=title,
    this.numberOfPages=numberOfPages,
    this.read=read;
};

Books.prototype.confirmCheck= function(){
if(this.read===false){
this.read=true;
console.log(this.read);
}else{
    this.read=false;
}
};



//function to create book element and append to div 
function createBookElement(book,index){
   //create div
    const div=document.createElement('div');
    div.setAttribute('id',index);
    div.classList.add('.books');
    //style created div
    div.style.padding='50px 10px 50px 10px';
    div.style.margin='10px';
    div.style.backgroundColor='orange';
    div.style.borderRadius='7px'
    div.style.boxShadow='rgba(50,50,93,0.25) 0px 13px 27px -5px, rgba(0,0,0,0.3) 0px 8px 16px -8px';
   
    //create book author element and append to div
    const book_author=document.createElement('div');
    book_author.setAttribute('id',`author${index}`);
    book_author.setAttribute('class','card-text');
     //styling div
   
  

    book_author.textContent=`Author:${myLibrary[index].author}`;
    div.appendChild(book_author);
    //create book title element and appned to div
    const book_title=document.createElement('div');
    book_title.setAttribute('id',`title${index}`);
    book_title.setAttribute('class','card-text');
    book_title.textContent=`Title:${myLibrary[index].title}`;
    div.appendChild(book_title);
    //Create  book page element an append to div
    const book_pages=document.createElement('div');
    book_pages.setAttribute('id',`pages${index}`);
    book_pages.setAttribute('class','card-text');
    book_pages.textContent=`Number Of Pages:${myLibrary[index].numberOfPages}`;
    div.appendChild(book_pages);
    //create checkbox div
    const theCheckBox=document.createElement('div');
    theCheckBox.setAttribute('id',`bookcheck${index}`);
    theCheckBox.setAttribute('class','card-text');
    theCheckBox.textContent='Read';
    div.appendChild(theCheckBox);
    //create checkbox element and append to div
    const book_checkbox=document.createElement('input');
    book_checkbox.setAttribute('id',`checkbox${index}`);
    book_checkbox.setAttribute('type','checkbox');
    book_checkbox.addEventListener('click',()=>{
        myLibrary[index].confirmCheck();
        console.log(myLibrary[index].read)
    });
    book_checkbox.checked=myLibrary[index].read;
    theCheckBox.appendChild(book_checkbox);
    
    //create delete button element
    const delete_button=document.createElement('div');
    delete_button.textContent='Delete';
    delete_button.setAttribute('id',`delete_button${index}`);
    delete_button.setAttribute('class','delete-button');
    delete_button.addEventListener('click',()=>{
        //delete function
        myLibrary.splice(index,1);
        console.log(myLibrary);
        renderBooks(); 
    })
    div.appendChild(delete_button);
console.log(div);
//append div to html element
    display_books.appendChild(div);
};

//to display modal
display_modal.addEventListener('click',()=>{
modal.style.display='block';
});



//function to render books from array library to the display
function renderBooks(){

    display_books.innerHTML='';
   myLibrary.map((book,index)=>{
 createBookElement(book,index)



    });
};
//add to array and display book item
function pushBook(){
    myLibrary.push(new Books((getAuthor.value),(getTitle.value),(getPages.value),(getStatus.checked)))
    renderBooks();
    modal.style.display='none'
};

//call book function on click
submitModal.addEventListener('click',()=>{
    pushBook();
})

