class Message(message: String) {
    val message: String

    init {
        this.message = message
    }

    fun puts() {
        println(message)
    }
}

val msg = Message("Hello Kotlin class!")
msg.puts()
