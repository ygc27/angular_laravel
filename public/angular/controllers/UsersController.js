app.controller('UsersController', function($scope,users,CSRF_TOKEN){

  // listar users
    users.getUsers().success(function(users){
      $scope.users = users;
    });

    // edit
    $scope.edit = function(user){
        $scope.user = user;
        $scope.edit_user = true;
    }

    // update
    $scope.update = function(user){

      var data = {'user':user}

      users.atualizarUser(user.id,data).success(function(retorno){
          if(retorno == 'atualizado'){
              $scope.mensagem = 'Atualizado com sucesso !!!';
              $scope.edit_user = false;
          }else{
              $scope.mensagem = 'Erro ao atualizar';
          }
      });
    }

    // cancel
    $scope.cancel = function(){
      $scope.edit_user = false;
    }

    // deletar
    $scope.delete = function(user){
        users.deletarUser(user).success(function(retorno){
            if(retorno == 'deletado'){
              var index = $scope.users.indexOf(user);
              $scope.users.splice(index,1);
              $scope.mensagem = 'Excluido com sucesso !!!';
            }
        });
    }

    // cadastrar

    $scope.cadastrar = function(user){

      var data = {'user':user,'_token':CSRF_TOKEN}

      users.cadastrarUser(data).success(function(retorno){
        if(retorno == 'cadastrado'){
          $scope.mensagem = 'Cadastrado com sucesso !!!';
        }
      });
    }

    // validacao formulario
    $scope.hasError = function(field, validation){
        if(validation){
          return ($scope.form[field].$dirty && $scope.form[field].$error[validation]) || ($scope.submitted && $scope.form[field].$error[validation]);
        }
        return ($scope.form[field].$dirty && $scope.form[field].$invalid) || ($scope.submitted && $scope.form[field].$invalid);
    };

});