app.factory('users', function($http){

    return {
        getUsers: function(){
            return $http.get('listarUsers');
        },
        deletarUser: function(user){
            return $http.delete('user/delete/'+user.id);
        },
        cadastrarUser: function(data){
            return $http.post('user/cadastrar',data);
        },
        atualizarUser: function(user,data){
            return $http.put('user/atualizar/'+user,data);
        }
    }
});