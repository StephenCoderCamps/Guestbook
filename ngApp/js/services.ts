namespace app.Services {

      export class MessageService {
        private MessageResource;

        public save(guestbook) {
          return this.MessageResource.save(guestbook).$promise;
        }

        constructor(private $resource:ng.resource.IResourceService) {
          this.MessageResource = $resource(`/api/guestbook/:id`);
        }
      }

      angular.module('app').service('messageService', MessageService);
}
