var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(messageService, $state) {
                this.messageService = messageService;
                this.$state = $state;
            }
            HomeController.prototype.save = function () {
                var _this = this;
                this.messageService.save(this.guestbook).then(function () {
                    _this.$state.go("Home");
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var MessageServiceController = (function () {
            function MessageServiceController(messageService, $state) {
                this.messageService = messageService;
                this.$state = $state;
            }
            MessageServiceController.prototype.save = function () {
                var _this = this;
                this.messageService.save(this.guestbook).then(function () {
                    _this.$state.go("Home");
                });
            };
            return MessageServiceController;
        }());
        Controllers.MessageServiceController = MessageServiceController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0E2Qlo7QUE3QkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBNkJ4QjtJQTdCYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBRXpCO1lBUU0sd0JBQW9CLGNBQTBDLEVBQVUsTUFBMEI7Z0JBQTlFLG1CQUFjLEdBQWQsY0FBYyxDQUE0QjtnQkFBVSxXQUFNLEdBQU4sTUFBTSxDQUFvQjtZQUV0RyxDQUFDO1lBUlEsNkJBQUksR0FBWDtnQkFBQSxpQkFJQztnQkFIQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUM1QyxLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDeEIsQ0FBQyxDQUFDLENBQUE7WUFDSixDQUFDO1lBS0wscUJBQUM7UUFBRCxDQUFDLEFBWEQsSUFXQztRQVhZLDBCQUFjLGlCQVcxQixDQUFBO1FBRUQ7WUFRTSxrQ0FBb0IsY0FBMEMsRUFBVSxNQUEwQjtnQkFBOUUsbUJBQWMsR0FBZCxjQUFjLENBQTRCO2dCQUFVLFdBQU0sR0FBTixNQUFNLENBQW9CO1lBRXRHLENBQUM7WUFSUSx1Q0FBSSxHQUFYO2dCQUFBLGlCQUlDO2dCQUhDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzVDLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUN4QixDQUFDLENBQUMsQ0FBQTtZQUNKLENBQUM7WUFLTCwrQkFBQztRQUFELENBQUMsQUFYRCxJQVdDO1FBWFksb0NBQXdCLDJCQVdwQyxDQUFBO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDckUsQ0FBQyxFQTdCYSxXQUFXLEdBQVgsZUFBVyxLQUFYLGVBQVcsUUE2QnhCO0FBQUQsQ0FBQyxFQTdCUyxHQUFHLEtBQUgsR0FBRyxRQTZCWiJ9