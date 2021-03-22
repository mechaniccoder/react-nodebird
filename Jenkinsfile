pipeline {
  agent any

  stages {
    stage("build") {
      steps {
        echo 'Install packages.'
        nodejs('Node-14.12') {
          sh 'yarn install'
        }
      }
    }
  }
}