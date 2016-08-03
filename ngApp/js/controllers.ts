namespace app.Controllers {

  export class HomeController {
      public guestbook;
      public save()
       {
        this.messageService.save(this.guestbook).then(() =>{

        })

      }

        constructor(private messageService:app.Services.MessageService, private $state:ng.ui.IStateService)
         {
            this.guestbook = this.messageService.list();
         }
  }

  export class MessageServiceController {
      public guestbook;
      // public save() {
      //   this.messageService.save(this.guestbook).then(() =>{
      //     this.$state.go(`Home`)
      //   })
      // }



        constructor(private messageService:app.Services.MessageService, private $state:ng.ui.IStateService,) {
          this.guestbook = this.messageService.list();
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
