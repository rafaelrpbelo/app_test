Rails.application.routes.draw do
  root 'main#index'

  get 'font-awesome'    => 'main#font_awesome'
  get 'file-field'      => 'main#file_field'
  get 'test-controller' => 'main#test_controller'
end
