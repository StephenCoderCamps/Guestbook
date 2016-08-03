namespace app.Controllers {
  export class HomeController {
      public guestbook;
      public save() {
        this.messageService.save(this.guestbook).then(() =>{
          this.$state.go(`Home`)
        })
      }

        constructor(private messageService:app.Services.MessageService, private $state:ng.ui.IStateService) {

    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
