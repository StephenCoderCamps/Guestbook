var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(messageService, $state) {
                this.messageService = messageService;
                this.$state = $state;
                this.guestbook = this.messageService.list();
            }
            HomeController.prototype.save = function () {
                this.messageService.save(this.guestbook).then(function () {
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var MessageServiceController = (function () {
            function MessageServiceController(messageService, $state) {
                this.messageService = messageService;
                this.$state = $state;
                this.guestbook = this.messageService.list();
            }
            return MessageServiceController;
        }());
        Controllers.MessageServiceController = MessageServiceController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FrQ1o7QUFsQ0QsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBa0N4QjtJQWxDYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBRXpCO1lBVU0sd0JBQW9CLGNBQTBDLEVBQVUsTUFBMEI7Z0JBQTlFLG1CQUFjLEdBQWQsY0FBYyxDQUE0QjtnQkFBVSxXQUFNLEdBQU4sTUFBTSxDQUFvQjtnQkFFOUYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQy9DLENBQUM7WUFYRyw2QkFBSSxHQUFYO2dCQUVFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBRTlDLENBQUMsQ0FBQyxDQUFBO1lBRUosQ0FBQztZQU1MLHFCQUFDO1FBQUQsQ0FBQyxBQWRELElBY0M7UUFkWSwwQkFBYyxpQkFjMUIsQ0FBQTtRQUVEO1lBVU0sa0NBQW9CLGNBQTBDLEVBQVUsTUFBMEI7Z0JBQTlFLG1CQUFjLEdBQWQsY0FBYyxDQUE0QjtnQkFBVSxXQUFNLEdBQU4sTUFBTSxDQUFvQjtnQkFDaEcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xELENBQUM7WUFDSCwrQkFBQztRQUFELENBQUMsQUFiRCxJQWFDO1FBYlksb0NBQXdCLDJCQWFwQyxDQUFBO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDckUsQ0FBQyxFQWxDYSxXQUFXLEdBQVgsZUFBVyxLQUFYLGVBQVcsUUFrQ3hCO0FBQUQsQ0FBQyxFQWxDUyxHQUFHLEtBQUgsR0FBRyxRQWtDWiJ9