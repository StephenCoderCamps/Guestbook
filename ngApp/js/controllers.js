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
                    _this.$state.go("Messages");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0ErQlo7QUEvQkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBK0J4QjtJQS9CYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBRXpCO1lBUU0sd0JBQW9CLGNBQTBDLEVBQVUsTUFBMEI7Z0JBQTlFLG1CQUFjLEdBQWQsY0FBYyxDQUE0QjtnQkFBVSxXQUFNLEdBQU4sTUFBTSxDQUFvQjtZQUV0RyxDQUFDO1lBUlEsNkJBQUksR0FBWDtnQkFBQSxpQkFJQztnQkFIQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUM1QyxLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtnQkFDNUIsQ0FBQyxDQUFDLENBQUE7WUFDSixDQUFDO1lBS0wscUJBQUM7UUFBRCxDQUFDLEFBWEQsSUFXQztRQVhZLDBCQUFjLGlCQVcxQixDQUFBO1FBRUQ7WUFVTSxrQ0FBb0IsY0FBMEMsRUFBVSxNQUEwQjtnQkFBOUUsbUJBQWMsR0FBZCxjQUFjLENBQTRCO2dCQUFVLFdBQU0sR0FBTixNQUFNLENBQW9CO2dCQUNoRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEQsQ0FBQztZQUNILCtCQUFDO1FBQUQsQ0FBQyxBQWJELElBYUM7UUFiWSxvQ0FBd0IsMkJBYXBDLENBQUE7UUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNyRSxDQUFDLEVBL0JhLFdBQVcsR0FBWCxlQUFXLEtBQVgsZUFBVyxRQStCeEI7QUFBRCxDQUFDLEVBL0JTLEdBQUcsS0FBSCxHQUFHLFFBK0JaIn0=