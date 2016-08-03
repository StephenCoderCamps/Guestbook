var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(messageService, $state) {
                this.messageService = messageService;
                this.$state = $state;
                this.guestbookEntry = this.messageService.list();
            }
            HomeController.prototype.save = function () {
                var _this = this;
                this.messageService.save(this.guestbook).then(function () {
                    _this.guestbookEntry = _this.messageService.list();
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FtQ1o7QUFuQ0QsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBbUN4QjtJQW5DYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBRXpCO1lBV00sd0JBQW9CLGNBQTBDLEVBQVUsTUFBMEI7Z0JBQTlFLG1CQUFjLEdBQWQsY0FBYyxDQUE0QjtnQkFBVSxXQUFNLEdBQU4sTUFBTSxDQUFvQjtnQkFFOUYsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BELENBQUM7WUFYRyw2QkFBSSxHQUFYO2dCQUFBLGlCQU1DO2dCQUpDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzlDLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDakQsQ0FBQyxDQUFDLENBQUE7WUFFSixDQUFDO1lBTUwscUJBQUM7UUFBRCxDQUFDLEFBZkQsSUFlQztRQWZZLDBCQUFjLGlCQWUxQixDQUFBO1FBaUJELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsRUFuQ2EsV0FBVyxHQUFYLGVBQVcsS0FBWCxlQUFXLFFBbUN4QjtBQUFELENBQUMsRUFuQ1MsR0FBRyxLQUFILEdBQUcsUUFtQ1oifQ==