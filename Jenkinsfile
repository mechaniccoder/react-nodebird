pipeline {
  agent any

  stages {
    stage("Install") {
      steps {
        echo 'Install packages.'
        nodejs('Node-12') {
          sh 'yarn install'
        }
      }
    }
  }
}