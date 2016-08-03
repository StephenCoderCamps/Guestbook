var app;
(function (app) {
    var Services;
    (function (Services) {
        var MessageService = (function () {
            function MessageService($resource) {
                this.$resource = $resource;
                this.MessageResource = $resource("/api/guestbook/:id");
            }
            MessageService.prototype.list = function () {
                return this.MessageResource.query();
            };
            MessageService.prototype.save = function (guestbook) {
                return this.MessageResource.save(guestbook).$promise;
            };
            return MessageService;
        }());
        Services.MessageService = MessageService;
        angular.module('app').service('messageService', MessageService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FtQlo7QUFuQkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxRQUFRLENBbUJyQjtJQW5CYSxXQUFBLFFBQVEsRUFBQyxDQUFDO1FBRWxCO1lBV0Usd0JBQW9CLFNBQXNDO2dCQUF0QyxjQUFTLEdBQVQsU0FBUyxDQUE2QjtnQkFDeEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUN6RCxDQUFDO1lBVk0sNkJBQUksR0FBWDtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN0QyxDQUFDO1lBRU0sNkJBQUksR0FBWCxVQUFZLFNBQVM7Z0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDdkQsQ0FBQztZQUtILHFCQUFDO1FBQUQsQ0FBQyxBQWRELElBY0M7UUFkWSx1QkFBYyxpQkFjMUIsQ0FBQTtRQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3RFLENBQUMsRUFuQmEsUUFBUSxHQUFSLFlBQVEsS0FBUixZQUFRLFFBbUJyQjtBQUFELENBQUMsRUFuQlMsR0FBRyxLQUFILEdBQUcsUUFtQloifQ==